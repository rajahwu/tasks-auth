const { execSync } = require('child_process');

function build() {
  try {
    execSync('tsc -p tsconfig.build.json', { stdio: 'inherit' });
    console.log('Build successful!');
  } catch (error) {
    console.error('Build failed.');
    process.exit(1);
  }
}

build();
