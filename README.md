## Screenshot

## Installation

### Install

In your terminal, go to the modules directory and clone the repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/davidph1/MMM-InOutBoard
```

### Update

Go to the module directory and pull the latest changes:

```bash
cd ~/MagicMirror/modules/MMM-InOutBoard
git pull
```

## Configuration

To use this module, you have to add a configuration object to the modules array in the `config/config.js` file.

### Example configuration

Minimal configuration to use the module:

```js
    {
			module: "MMM-InOutBoard",
			position: "top_center",
			config: {
				numberOfNames:5,
				names:[{name:"James",press:"J"},{name:"Paul",press:"P"},{name:"David",press:"D"},{name:"Chris",press:"C"},{name:"Nigel",press:"N"}]
			}
		}
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
