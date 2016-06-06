## Hackifieds Git Workflow

### Initial Setup
1. **GITHUB** || fork the project repo from https://github.com/hackifieds/hackifieds
2. **LOCAL** || git clone https://github.com/[your_github_username]/hackifieds.git => creates local repo
3. **LOCAL** || git remote add upstream https://github.com/Hackifieds/hackifieds.git => links upstream repo

### Development Worklow
1. Find issue you have been assigned, or assign a needed issue to yourself
2. **LOCAL** || git status => make sure you are on master branch
3. **LOCAL** || git pull --rebase upstream master => make sure master branch has latest project changes
4. **LOCAL** || git checkout -b feat-issuename => create and switch to a feature/fix branch for your issue
5. Work on your feature/fix branch
  a. Edit existing files / new files
  b. git add [new/existing files]
  c. git commit
6. **LOCAL** || git pull --rebase upstream master => make sure your feature/fix branch has latest changes
7. Resolve and merge conflicts between feature/fix branch and latest rebased changes (as needed)
8. **LOCAL** || git push origin feat-issuename => push your feature/fix branch (with resolved/merged changes) to new feature branch
9. **GITHUB** || Create pull request, specifying additions/changes and issues number(s)
10. If Pull request rejected, begin again from Step #5

### Pull Request Acceptance
1. Make sure pull request commentary is properly descriptive
2. Review each line changed/added in each source file
3. Merge or reject request

