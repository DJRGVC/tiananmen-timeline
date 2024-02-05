# Scrolly starter

A Svelte kit template for creating a scrolly article. The template uses ONS Svelte Component's [feature article](https://onsvisual.github.io/svelte-components/?path=/docs/templates-feature-article--docs) as an example for the content.

It's setup to use a word doc, current in `demo-data/demo.docx`, as the place where you edit the content. It's written in an ArchieML language. 

## Getting started
Create a fork or local copy of this repository, and then run the following command to install dependencies:

```bash
npm install
```

Next, run this command to read the word doc in the **/demo-data** folder. This will parse the content as ArchieML and write a JSON file to **/static/data**:

```bash
npm run build:text
```

And, finally, run the demo in preview/dev mode.
```bash
npm run dev
```

## Adapting the template your own data and templates

The working directory for where the script looks for the word doc is set in **`/src/app.config.js`**. For sharepoint files, you can sync your sharepoint folder to your computer and then specify the appropriate path and file name. 

```javascript
// Locations of data file (path to a local or shared drive)
export const source_dir = "./demo-data"
export const data_file = "demo.docx";
```

ArchieML provides a [sandbox](http://archieml.org/sandbox.html) so you can preview what JSON it will output. 


## Customising the app

To make further amendments to the app (eg. adding new section styles, changing how the scrolly changes or custom charts/maps) requires a working knowledge of **Svelte**.

The best place to start editing is in the **/src/routes/+page.svelte** file.

## Building the app

When you're ready to publish the app (either for preview or for production), you'll need to run the **build** command. This will build a static version of the app in the **/build** folder, which can be copied to wherever you want to host the app:

```bash
npm run build
```

Before building the app, you'll need to customise the base paths in the **/app.config.js** file. The default path is **/scrolly-template**. You can set a separate base-relative path for a preview server (eg. **/my-app**) and for a production server (eg. **/visualisations/my-app**):

```javascript
export const base_prod = '/scrolly-template'; // Directory on the ONS website
export const base_preview = '/scrolly-template'; // Directory on datavisweb preview server or Github Pages
```

