# Mini Calculator

```bash
$ ionic cordova plugin add https://github.com/alifw03/cordova-plugin-minicalculator.git
$ npm install @ali33/mini-calculator-native
```

# Usage Documentation

Plugin repo: [https://github.com/alifw03/mini-calculator-native.git](https://github.com/alifw03/mini-calculator-native.git)

This is a mini calculator ionic native module which do some basic operations of maths i.e; add, subtract, multiply or divide.

Example:

```bash
import { MiniCalculator } from  '@ali33/mini-calculator-native/ngx';

constructor(private miniCalculator: MiniCalculator) { }

...

this.calc.coolMethod("WRITE_YOUR_CUSTOM_MESSAGE_STRING_HERE").then(res => {
  alert(res);
}).catch(err => alert(JSON.stringify(err)));
```

# Important Note

Please don't forget to add plugin in app.module's providers.
