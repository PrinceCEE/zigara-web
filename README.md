## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### How to contribute to the project:

- To work on a feature assigned to you, checkout it out to a new branch, example:
  - If it's a feature, branch name should start with ft/\*\*\*\*(example ft/create-sign-up-page)
  - If it's a bug fix, branch name should start with fix/\*\*\*\*(example fix/null-safety)
- After working on a branch, run `git push origin branchname`, to push to github, then come to github and make a PR
- To make a PR, include a description of what the code does with a screenshot so it can be tested.
- Wait for the PR to be reviewed and merged before making any other PRs(So, you should have only one open PRs at any time)

### Common Git commands

- `git add path`(example git add filename, git add . etc, to add files to staging for commits)
- `git commit -m "commit message"`, for commit to git. Remember to use short, good and descriptive messages
- `git commit --allow-empty-message -m ""`, for allowing empty messages
- `git stash` (To stash out the recent uncommited work)
- `git stash pop` to remove the last stashed work from the stack and bring it back to the codebase, maybe in another branch
- `git log` and `git log --oneline` for logging commit history
- `git checkout branchname` to checkout into another branch. Remember to stash or commit work before this.
- `git checkout commit-hash` to checkout to a particular commit.
- `git reset commit-hash --soft`, `git reset commit-hash --hard` for resetting to previous commits.
- `git branch branchname` to create a new branch
- `git checkout -b branchname` to create a branch and checkout
