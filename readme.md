<h1>Overview</h1>
<p>[project_reactnative_todo.png]</p>



<h1>Project Introduction</h1>
<p>This is a demo CRUD applicaton Build using </p>
<table>
<tbody>
  <tr>
    <th>Frontend</th>
    <td> React Native </td>
  </tr>
  <tr>
    <th rowspan="2">Backend</th>
    <td> NodeJS & Express JS</td>
  </tr>
  <tr>
    <td> MS SQL Server</td>
  </tr>
</tbody>
</table>
<p>The frontend react native application use axios for calling APIS</p>
<p>The backend follows MVC pattern and preform CRUD on the Task Object in database </p>
<p>Script for Creation of Task Table and Script for stored procedures performing CRUD on Task  are located in <i> /dbscript folder</i> </p>
<p>Database user configuration:</p>
<p>[dbUserSettings.png]</p>
<img width="1628" alt="dbUserSettings" src="https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/1dde733f-7d37-41e2-853f-865c8db4649a">
<p>[dbUserSettings2.png]</p>
<img width="956" alt="dbUserSettings2" src="https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/4a0ac2f7-00d5-40fa-bf58-ff3899890667">
<p>The fullstack application supports the following functionalities:</p>
<ul>
<li>Basic CRUD operation</li>
</ul>

<h1>Screenshots</h1>
<h2>Read</h2>
<p>[read1.png]</p>

![read1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/bef60096-9905-4373-bf85-09d31455affd)

<h2>Create</h2>
<p>[create1.png]</p>

![create1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/e9cb7e53-5459-48ac-9bc8-401a8110c583)

<p>[create_error.png]</p>

![create_error](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/5c82c45e-92a3-4f84-bbb4-43dc83b27265)

<p>[create2.png]</p>

![create2](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/154613cd-ead4-4bbf-93ce-42969d66a050)

<p>[create3.png]</p>

![create3](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/d6c46d5f-c4d2-4ea5-b073-9445acb49f6d)
<h2>Update</h2>
<p>[update1.png]</p>

![update1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/0e51c644-1afc-4787-9c1a-9b683a1f5e96)

<p>[update2.png]</p>

![update2](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/66a61318-4294-4c50-bb2b-70f0dcc4e653)

<p>[update3.png]</p>

![update3](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/2c0b5d6b-c9bb-4fd6-92a6-e586a082b832)
<h2>Delete</h2>
<p>[delete1.png]</p>

![delete1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/f52ebd6d-ef78-4dd9-ba8e-b0be4a366a02) 

<p>[delete2.png]</p>

![delete2](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/70e4083d-6e2f-4df1-9c23-ce140e2eeabe)
<h1>&#128221;Development Memos</h1>
<h2>&#x270f;How we Create new react native Pj </h2>
<pre>
npm install -g expo-cli
expo init frontend ->blank managed flow
npm start
</pre>

<h2>&#x270f;Using dotenv in REACT NATIVE</h2>
<ol>
<li>Install react-native-dotenv dependency</li>
<pre>
npm install react-native-dotenv
</pre>
<li>add the .babelrc file</li>
<pre>
{
    "plugins": [
       [
          "module:react-native-dotenv",
          {
             "moduleName": "@env",
             "path": ".env",
             "blacklist": null,
             "whitelist": null,
             "safe": false,
             "allowUndefined": true
          }
       ]
    ]
 }
</pre>
<li>Use it in react native code</li>
<pre>
import {BACKEND_URL} from "@env" 
console.log(BACKEND_URL)
</pre>
</ol>
<h1>&#128640;How to deploy application as APK </h1>
<ol>
<li>Install eas cli</li>
<code>npm install -g eas-cli</code>
<li>Login to expo</li>
<code>expo login</code>
<li>Then configure the eas.json file</li>
<pre>
{
    "build": {
        "development": {
            "android": {
                "buildType": "apk"
            },
            "ios": {
                "buildConfiguration": "Debug"
            }
        },
        "preview": {
            
        },
        "production": {}
    }
}
</pre>
<li>Run build command</li>
<code>eas build -p android --profile development</code>
<li>Download the apk from expo website https://expo.dev/</li>
</ol>
