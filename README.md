# Gitopticon

An application to search for and summarize GitHub repositories.

## License

All source code is available under the GNU General Public License. See [LICENSE](LICENSE) for details.

## Dependencies

* Node.js
* Yarn

## Setup

To run Gitopticon yourself, clone the repo and install the dependencies:

```
$ yarn install
```

### GitHub Authentication

Because the application uses GitHub's GraphQL API, some form of authentication is necessary.

For this, we will be inserting a personal access token into the local environment.

* Create a `.env` file in the root of this repository.

* Generate a fine-grained personal access token using GitHub's official instructions [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).
This application only needs read-only access to public repositories. It needs no specific permissions, so the default configuration is fine.

* Copy the generated access token into the `.env` file under the key `REACT_APP_GITHUB_API_KEY`:
```.env
REACT_APP_GITHUB_API_KEY=<your key here, starts with github_pat>
```

## Testing

```
$ yarn test
```

## Running the app

Now, you can run the app:

```
$ yarn start
```

This will automatically open your browser to http://localhost:3000/
