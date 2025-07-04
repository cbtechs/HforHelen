#!/bin/bash

# Setup Mirror Authentication Script
# This script helps configure authentication for mirroring to cbtechs repository

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

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

echo "🔐 Setting up mirror authentication..."

print_status "Current mirror remote:"
git remote get-url mirror

echo ""
print_warning "You have two options for authentication:"
echo ""
echo "1. Add mohashyne as collaborator to cbtechs/HforHelen (Recommended)"
echo "2. Use a Personal Access Token from cbtechs account"
echo ""

read -p "Which option do you want to use? (1 or 2): " choice

case $choice in
    1)
        echo ""
        print_status "Option 1: Add Collaborator"
        echo ""
        echo "Steps to follow:"
        echo "1. Go to: https://github.com/cbtechs/HforHelen/settings/access"
        echo "2. Click 'Add people'"
        echo "3. Search for and add: mohashyne"
        echo "4. Give 'Write' or 'Admin' permissions"
        echo "5. mohashyne will receive an email invitation"
        echo "6. Accept the invitation"
        echo ""
        read -p "Press Enter when you've completed these steps..."
        
        print_status "Testing mirror access..."
        if ./mirror-repos.sh; then
            print_success "🎉 Mirroring setup complete!"
        else
            print_error "Still having issues. Try option 2 with a token."
        fi
        ;;
        
    2)
        echo ""
        print_status "Option 2: Personal Access Token"
        echo ""
        echo "Steps to get token:"
        echo "1. Log in to cbtechs GitHub account"
        echo "2. Go to: Settings → Developer settings → Personal access tokens → Tokens (classic)"
        echo "3. Click 'Generate new token (classic)'"
        echo "4. Give it a name like 'HforHelen Mirror'"
        echo "5. Select 'repo' scope (full control of private repositories)"
        echo "6. Click 'Generate token'"
        echo "7. Copy the token (you'll only see it once!)"
        echo ""
        
        read -p "Enter the token from cbtechs account: " token
        
        if [ -z "$token" ]; then
            print_error "No token provided. Exiting."
            exit 1
        fi
        
        print_status "Updating mirror remote with token..."
        git remote set-url mirror "https://x-access-token:${token}@github.com/cbtechs/HforHelen.git"
        
        print_success "Mirror remote updated with authentication"
        print_status "New mirror URL: $(git remote get-url mirror | sed 's/x-access-token:[^@]*@/x-access-token:***@/')"
        
        print_status "Testing mirror access..."
        if ./mirror-repos.sh; then
            print_success "🎉 Mirroring setup complete!"
        else
            print_error "Authentication failed. Please check your token."
        fi
        ;;
        
    *)
        print_error "Invalid choice. Please run the script again and choose 1 or 2."
        exit 1
        ;;
esac

echo ""
print_status "Future pushes to mohashyne will automatically mirror to cbtechs!"
print_status "You can also manually mirror anytime with: ./mirror-repos.sh"
