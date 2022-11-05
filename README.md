# Customized JSON Resume Schema

🖼️ This is a slightly tweaked version of the [JSON Resume Schema](https://github.com/jsonresume/resume-schema). That project is open source and it takes years and a lot of deliberation for schema changes to be accepted (5 years for v1). Therefore, I'm customizing the schema to fit my personal needs for my [resume](https://github.com/anthonyjdella/my-resume).

The main things that have been modified:
1. Add leadership section
2. Validation for present or current dates, as well as an empty string or null
3. Allows URLs to be null or empty
4. Speaking section for public speaking engagements

## How to Add/Modify Schema

1. Make changes to `schema.json`. Look at "speaking" or "leadership" for examples.
2. Edit the `sample.resume.json` to match the new `schema.json`
3. In `test/__test__` add a new file for the object you created.
4. In `test/` create a `.spec.js` that tests the new schema.
5. Run tests to see if everything worked. `npm run test`, `npm run validate`, `npm run test-units`
6. Edit `package.json` version and deploy to npm with `npm publish`
7. Go to npmjs and see if the package was updated.
8. Commit and push changes from this repo into GitHub.
9. Go to another project `https://github.com/anthonyjdella/customized-registry-functions` and deploy to Firebase. Currently, the GitHub action isn't working for some reason (figure it out later).
10. In that project, `npm install` in the root directory. Then cd to `functions` and `npm install` and `npm update`. You need to update so it downloads the new version of the resume schema.
11. From the root directory, `firebase deploy` to deploy the updated project to Firebase.
12. Update your Resume gist with the fields to match the new schema.
13. Check your resume works.

---

<details>
  <summary>Click to expand README.md of the source repository!</summary>

[![GitHub Releases](https://badgen.net/github/tag/jsonresume/resume-schema)](https://github.com/jsonresume/resume-schema/releases)
[![NPM Release](https://badgen.net/npm/v/resume-schema)](https://www.npmjs.com/package/resume-schema)
[![Latest Status](https://github.com/jsonresume/resume-schema/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-template/actions)
[![Release Status](https://github.com/jsonresume/resume-schema/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-template/actions)

Standard, Specification, Schema

### Getting started

```
npm install --save resume-schema
```

To use

```js
const resumeSchema = require("resume-schema");
resumeSchema.validate(
  { name: "Thomas" },
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);
```

More likely

```js
var fs = require("fs");
var resumeSchema = require("resume-schema");
var resumeObject = JSON.parse(fs.readFileSync("resume.json", "utf8"));
resumeSchema.validate(resumeObject);
```

The JSON Resume schema is available from:

```js
require("resume-schema").schema;
```

### Contribute

We encourage anyone who's interested in participating in the formation of this standard to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.

We use automatic semver system.

Pull requests titles should be formatted as such

```
"fix: added something" - will bump the patch version
"feat: added something" - will bump the minor version
```

`major` version bumps will be few and far between for this schema.

### Other resume standards

- [HR-XML](https://schemas.liquid-technologies.com/HR-XML/2007-04-15/)
- [Europass](http://europass.cedefop.europa.eu/about-europass)
  
</details>
