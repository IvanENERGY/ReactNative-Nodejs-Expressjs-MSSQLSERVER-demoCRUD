<h1>Overview</h1>
<p>[project_reactnative_todo.png]</p>

![project_reactnative_todo](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/4352c5ae-de58-47df-8687-4672436f1af8)



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

<h1>	&#x1F4F8;Screenshots</h1>
<h2>		&#x1F5BC;Read</h2>
<p>[read1.png]</p>

![read1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/bef60096-9905-4373-bf85-09d31455affd)

<h2>		&#x1F5BC;Create</h2>
<p>[create1.png]</p>

![create1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/e9cb7e53-5459-48ac-9bc8-401a8110c583)

<p>[create_error.png]</p>

![create_error](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/5c82c45e-92a3-4f84-bbb4-43dc83b27265)

<p>[create2.png]</p>

![create2](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/154613cd-ead4-4bbf-93ce-42969d66a050)

<p>[create3.png]</p>

![create3](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/d6c46d5f-c4d2-4ea5-b073-9445acb49f6d)
<h2>		&#x1F5BC;Update</h2>
<p>[update1.png]</p>

![update1](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/0e51c644-1afc-4787-9c1a-9b683a1f5e96)

<p>[update2.png]</p>

![update2](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/66a61318-4294-4c50-bb2b-70f0dcc4e653)

<p>[update3.png]</p>

![update3](https://github.com/IvanENERGY/ReactNative-Nodejs-Expressjs-MSSQLSERVER-demoCRUD/assets/90034836/2c0b5d6b-c9bb-4fd6-92a6-e586a082b832)
<h2>		&#x1F5BC;Delete</h2>
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
<h2>&#x270f;ScrollView vs FlatList </h2>
<p>FlatList give better performance for dynamic list, as it doesnt render all list items at once, list items are only rendered during scrolling</p>
<h2>&#x270f;Using dotenv file in REACT NATIVE (&#xFE0F;No need to install any dependency)</h2>
<ol>

<li>add .env file (Prefix must start with EXPO_PUBLIC_)</li>
<pre>
EXPO_PUBLIC_BACKEND_URL=http://192.168.1.6:3000
</pre>

<li>Call <code>process.env.EXPO_PUBLIC_BACKEND_URL</code> directly in code </li>
<li>for building the application:  configure eas.json as well: add  "env": {"EXPO_PUBLIC_BACKEND_URL":"http://192.168.1.6:3000"}</li>
</ol>


<h1>&#128640;How to deploy application as APK </h1>
<h2>&#x1F69A;Make sure the built app can connect the Internet</h2>
<ol>
<li>Install expo-build properties</li>
<pre>
npx expo install expo-build-properties
</pre>
<li>Change plugin attribute in app.json</li>
<pre>
"plugins": [
      ["expo-build-properties", {
        "android": {
          "usesCleartextTraffic": true
        },
        "ios": {
        }
      }]
    ]
</pre>
</ol>
<h2>&#x1F69A;Configure the eas build file </h2>
<ol>
<li>Install eas cli</li>
<code>npm install -g eas-cli</code>
<li>Login to expo</li>
<code>expo login</code>
<li>Then add the eas.json file</li>
<pre>
{
    "build": {
        "dev": {
            "android": {
                "buildType": "apk"
            },
            "ios": {
                "buildConfiguration": "Debug"
            },
            "env": {
              "EXPO_PUBLIC_BACKEND_URL": "http://192.168.1.6:3000"
            }

        },
        "preview": {},
        "prod": {}
}
}
</pre>
</ol>
<h2>&#x1F69A;Finally we can run the build command to build the APK </h2>
<code>eas build -p android --profile dev</code>
<p>Download the apk from expo website https://expo.dev/</p>

