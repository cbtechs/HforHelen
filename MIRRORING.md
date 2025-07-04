# Repository Mirroring Setup

This repository is configured to automatically mirror from `mohashyne/HforHelen` to `cbtechs/HforHelen`.

## Setup Overview

### 1. Remote Configuration
- **Origin**: `https://github.com/mohashyne/HforHelen.git` (primary repository)
- **Mirror**: `https://github.com/cbtechs/HforHelen.git` (mirror repository)

### 2. Automatic Mirroring Methods

#### GitHub Actions (Recommended)
- **File**: `.github/workflows/mirror-repository.yml`
- **Triggers**: Push to main, dev, or feature branches
- **Requirements**: 
  - `MIRROR_TOKEN` secret configured in repository settings
  - Token must have access to cbtechs repository

#### Manual Script
- **File**: `mirror-repos.sh`
- **Usage**: `./mirror-repos.sh`
- **Purpose**: Manual mirroring when needed

#### Git Hook
- **File**: `.git/hooks/post-push`
- **Purpose**: Local automatic mirroring after push

## Initial Setup Instructions

### Step 1: Create Mirror Repository
1. Log in to the `cbtechs` GitHub account
2. Create a new repository named `HforHelen`
3. Make it public
4. Don't initialize with README (it will be mirrored)

### Step 2: Configure GitHub Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Create a token with `repo` permissions for the cbtechs account
3. Add the token as a secret named `MIRROR_TOKEN` in the mohashyne repository settings

### Step 3: Initial Mirror Push
Run the manual script to do the first mirror:
```bash
./mirror-repos.sh
```

## Usage

### Automatic Mirroring
Once set up, mirroring happens automatically:
- Every push to main, dev, or feature branches triggers GitHub Actions
- All branches and tags are mirrored
- History is preserved

### Manual Mirroring
If you need to manually mirror:
```bash
# Using the script
./mirror-repos.sh

# Or manually
git push mirror --all
git push mirror --tags
```

### Check Mirror Status
```bash
# View remotes
git remote -v

# Check if mirror is up to date
git fetch mirror
git log --oneline --graph --all
```

## Troubleshooting

### Common Issues

1. **Repository doesn't exist on cbtechs**
   - Create the repository on cbtechs account first
   - Ensure it's named exactly `HforHelen`

2. **Authentication failed**
   - Check MIRROR_TOKEN secret is configured
   - Verify token has repo permissions
   - Ensure token belongs to account with access to cbtechs repo

3. **Push rejected**
   - Mirror repository may have conflicting history
   - Use `--force` flag carefully: `git push mirror --all --force`

4. **GitHub Actions failing**
   - Check Actions tab for detailed error logs
   - Verify MIRROR_TOKEN secret exists
   - Ensure workflow file syntax is correct

## Security Notes

- The MIRROR_TOKEN should have minimal required permissions (repo access only)
- Token should be regularly rotated for security
- Never commit tokens or credentials to the repository

## Monitoring

- Check GitHub Actions tab for mirror status
- Monitor both repositories to ensure sync
- Set up notifications for failed Actions if needed
