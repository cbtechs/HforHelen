#!/bin/bash

# Repository Mirroring Script
# Mirrors changes from mohashyne/HforHelen to cbtechs/HforHelen

set -e  # Exit on any error

echo "🔄 Starting repository mirroring process..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository!"
    exit 1
fi

# Check if remotes exist
if ! git remote get-url origin > /dev/null 2>&1; then
    print_error "Origin remote not found!"
    exit 1
fi

if ! git remote get-url mirror > /dev/null 2>&1; then
    print_warning "Mirror remote not found. Adding it..."
    git remote add mirror https://github.com/cbtechs/HforHelen.git
    print_success "Mirror remote added"
fi

# Fetch latest changes from origin
print_status "Fetching latest changes from mohashyne/HforHelen..."
git fetch origin

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
print_status "Current branch: $CURRENT_BRANCH"

# Push current branch to mirror
print_status "Pushing $CURRENT_BRANCH to cbtechs/HforHelen..."
if git push mirror "$CURRENT_BRANCH"; then
    print_success "Successfully pushed $CURRENT_BRANCH to mirror repository"
else
    print_error "Failed to push to mirror repository"
    print_warning "You may need to:"
    print_warning "1. Create the repository on cbtechs account first"
    print_warning "2. Ensure you have push access to cbtechs/HforHelen"
    print_warning "3. Check your authentication credentials"
    exit 1
fi

# Push all branches
print_status "Pushing all branches to mirror..."
if git push mirror --all; then
    print_success "All branches pushed to mirror"
else
    print_warning "Some branches may not have been pushed"
fi

# Push all tags
print_status "Pushing all tags to mirror..."
if git push mirror --tags; then
    print_success "All tags pushed to mirror"
else
    print_warning "Some tags may not have been pushed"
fi

print_success "🎉 Repository mirroring completed successfully!"
print_status "Origin: $(git remote get-url origin)"
print_status "Mirror: $(git remote get-url mirror)"
