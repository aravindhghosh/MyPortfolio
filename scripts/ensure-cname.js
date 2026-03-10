const fs = require('fs');
const path = require('path');

const cnamePath = path.join(__dirname, '..', 'public', 'CNAME');

if (!fs.existsSync(cnamePath)) {
  console.error('');
  console.error('Deploy blocked: public/CNAME is missing.');
  console.error('GitHub Pages removes your custom domain when the published branch has no CNAME file.');
  console.error('Create public/CNAME with your domain on a single line, for example:');
  console.error('  yourdomain.com');
  console.error('');
  process.exit(1);
}

const domain = fs.readFileSync(cnamePath, 'utf8').trim();

if (!domain) {
  console.error('');
  console.error('Deploy blocked: public/CNAME is empty.');
  console.error('Add your custom domain on a single line, for example:');
  console.error('  yourdomain.com');
  console.error('');
  process.exit(1);
}

if (/\s/.test(domain)) {
  console.error('');
  console.error('Deploy blocked: public/CNAME must contain exactly one domain with no spaces.');
  console.error(`Current value: ${JSON.stringify(domain)}`);
  console.error('');
  process.exit(1);
}

console.log(`Using GitHub Pages custom domain: ${domain}`);
