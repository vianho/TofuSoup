import { TypescriptProject } from '@vianho/apidays24pj';
const project = new TypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@vianho/apidays24pj'],
  name: 'TofuSoup',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();