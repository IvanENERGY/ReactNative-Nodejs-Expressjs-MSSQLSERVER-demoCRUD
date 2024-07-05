<h1>Overview</h1>
<p>[project_reactnative_todo.png]</p>

![project_android_todo]

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
[dbUserSettings.png]
[dbUserSettings2.png]
<p>The fullstack application supports the following functionalities:</p>
<ul>
<li>Basic CRUD operation</li>
</ul>
<h1>How we Create new react natice Pj </h1>
<pre>
npm install -g expo-cli
expo init frontend ->blank managed flow
npm start
</pre>
<h1>Screenshots</h1>
<h2>Read</h2>

<h2>Create</h2>

<h2>Update</h2>

<h2>Delete</h2>














<h1>Using dotenv in REACT NATIVE</h1>
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