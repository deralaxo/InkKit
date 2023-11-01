import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("PackageGen", {
    description:
      "InkKit package generator. This generator will create a new package in the InkKit monorepo.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new package to create? (without @inkkit/)",
        validate: (input: string) => {
          //regex matching package.json name field
          if (input.match("^(?:(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?/[a-z0-9-._~])|[a-z0-9-~])[a-z0-9-._~]*$")) {
            return true;
          }
          return 'Invalid package name. Please follow the naming convention for npm packages.';
        },
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the new package?",
      },
      {
        type: "input",
        name: "author",
        message: "Who is the author of the new package?",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: "templates/package",
        templateFiles: "templates/package/**",
      },
    ],
  });
}
