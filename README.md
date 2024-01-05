
# Remote-JS-Loader
Contacts remote API via HTTPS and runs encrypted JS string, saving the need to update a codebase locally

## Requirements for using
- NodeJS installed
- PKG and RESEDIT installed Globally via npm

## Usage
Designed to be used in tandem with your own API server, see (place holder)

1. Clone the repo
2. Update the URL and Authorization header to match your own information
3. Run the supplied build command
4. Execute the EXE

## WARNING: eval() is dangerous

Realistically, this should not be used due to the security issues posed by eval()  
Use at your own risk  
See [Mozilla's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) in depth explanation as to why using eval() is a bad idea
