# json-canonicalizer

A simple CLI tools that creates a canonical version of a JSON file suitable for doing `diff`s or
storing in `git` using smudge filters.

## Installing

Using `npm`:

```sh
npm install -g json-canonicalizer
```

```sh
yarn global add json-canonicalizer
```

## Usage

```sh
json-canonicalizer < somefile.json
```
