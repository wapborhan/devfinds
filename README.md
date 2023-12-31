<h1  align="center">Find Devs</h1>

<h1  align="center">Connect and Discover with Skilled Developers</h1>

<p  align="center">

<a  href="https://github.com/wapborhan/find-devs/blob/master/LICENSE"  target="blank">

<img  src="https://img.shields.io/github/license/wapborhan/find-devs?style=for-the-badge&logo=appveyor"  alt="License"  />

</a>

<a  href="https://github.com/wapborhan/find-devs/fork"  target="blank">

<img  src="https://img.shields.io/github/forks/wapborhan/find-devs?style=for-the-badge&logo=appveyor"  alt="Forks"/>

</a>

<a  href="https://github.com/wapborhan/find-devs/stargazers"  target="blank">

<img  src="https://img.shields.io/github/stars/wapborhan/find-devs?style=for-the-badge&logo=appveyor"  alt="Star"/>

</a>

<a  href="https://github.com/wapborhan/find-devs/issues"  target="blank">

<img  src="https://img.shields.io/github/issues/wapborhan/find-devs.svg?style=for-the-badge&logo=appveyor"  alt="Click Vote Issue"/>

</a>

<a  href="https://github.com/wapborhan/find-devs/pulls"  target="blank">

<img  src="https://img.shields.io/github/issues-pr/wapborhan/find-devs.svg?style=for-the-badge&logo=appveyor"  alt="Click Vote Open Pull Request"/>

</a>

</p>

<a  id="about"></a>

## About

- FindDevs - [Website](https://devfinds.vercel.app/)

- FindDevs is an open source project that aims to create a platform for developers to showcase their skills and connect with potential collaborators, all in a user-friendly and searchable format.

<a  id="features"></a>

## Features

- Users can search by developer name, title, skill.
- A strong search system has been created just for this.

<a  id="add-profile-data"></a>

## How to add your profile Data

<a  id="prerequisites"></a>

### Prerequisites

- A GitHub account.
- Git installed on your local development environment.
- Node Package Manager (npm) installed on your local development environment.

## Steps to Add Your Profile Data

1. Fork the repository: To create a copy of the repository in your GitHub account, click on the "Fork" button in the top right corner of the project repository page.

2. Clone the forked repository: To clone the repository to your local development environment, open the terminal or command prompt and run the following command:
```
	git clone https://github.com/<your-github-username>/devfinds.git
```
3. Install dependencies: To install the necessary dependencies for the project, navigate to the project directory and run the following command:

```
	npm install
```

4. Navigate to the **`public/data`** folder in your project directory.

5. Create a new JSON file named **`your_github_username.json`** (replace your_github_username with your actual GitHub username). Open the file you just created.

6. Add the following JSON object, replacing the placeholder values with your own details:

```json
{
  "name": "Your Name",
  "headline": "Your Designation",
  "location": "Your Location",
  "bio": "Your Bio should be 30-40 words not more then that",
  "avatar": "https://github.com/<your-github-username>.png",
  "portfolio": "Your Portfolio URL or Github URL",
  "skills": ["Your Skill 1", "Your Skill 2", "..."],
  "social": {
    "GitHub": "https://github.com/<github-username>",
    "Twitter": "https://twitter.com/<twitter-username>",
    "LinkedIn": "https://www.linkedin.com/in/<linkedin-username>"
  }
}
```

7. Save the **`your_github_username.json`** file.

8. Navigate to the **`src`** folder in your project directory. Open the **`DevList.json`** file.

9. Add your JSON filename (your_github_username.json) to the array of filenames in the `DevList.json` file, like this:

```json
["filename1.json", "filename2.json", "your_github_username.json"]
```

10. Save the **`DevList.json`** file.

11. Create a new branch: To create a new branch for your profile, run the following command:

```
	git checkout -b add-profile
```

12. Add your changed files to the stage by running the following command:

```
	git add .
```

13. Commit your changes: To save your changes to the branch, run the following command:

```
	git commit -m "add: <your-name>"
```

14. Push to the branch: To push the changes to the remote repository, run the following command:

```
	git push origin add-profile
```

15. Create a pull request: To submit your changes to the main repository, create a pull request by clicking on the "Compare & pull request" button on your forked repository page.

16. Wait for review and merge: Wait for the project maintainers to review and merge your changes.

Once your changes are merged, your profile data will be added to the project's **`DevList.json`** file and your profile will be displayed on the project's website.

<a  id="contributors"></a>

## Contributors

<a  href="https://github.com/wapborhan/devfinds/graphs/contributors">

<img  src="https://contrib.rocks/image?repo=wapborhan/devfinds"  />

</a>
