# Session World Map React Component
<p align="left">
<a href="https://badge.fury.io/js/session-country-map"><img src="https://badge.fury.io/js/session-country-map.svg" alt="npm version" height="18"></a>
</p>
This component allows you to integrate interactive maps into your React applications easily, enabling you to display session, click, event data effectively on admin dashboards.

<p align="center"><img src="https://github.com/user-attachments/assets/44cd90b9-3fc2-46da-bb66-6615b9805fcc" alt="Preview Image"><p>

## Features

- Display sessions on an interactive map.
- Customize coloring of the countries
- Zoom and pan functionalities for easy navigation.

## Missing features
- Currently the zoom, pan and country select function is only supported on desktop devices with mouse input


## Installation

To use the Session Map React Component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install session-country-map
```


## Example:

```javascript
import { SessionMap, CountryCodeType } from "session-country-map";


<div className="flex basis-2/3 flex-col justify-center">
<SessionMap
 valueTytle="Sessions"
 valueByCountryMap={
    new Map ([
        ["US", {value:1000, className:"fill-sky-200"}],
        ["DE", {value:2000, className:"fill-sky-300"}],
        ["FR", {value:4000, className:"fill-sky-400"}],
    ])
 }
/>
</div>

```



## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This software uses source code and resources from the `flag-icons` npm package, 
which is also licensed under the MIT License.
The `flag-icons` package can be found at: https://www.npmjs.com/package/flag-icons

- The base world map SVG data is provided by simplemaps.com and is also licensed under the MIT License. 
You can find it at https://simplemaps.com/resources/svg-world


