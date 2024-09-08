<h1 align="center">Form Validation with React, Chakra UI, and react-toastify</h1>

<p align="center">
  <strong>A simple form validation project implementing Register, Login, and Logout functionalities</strong>
</p>

## Table of Contents
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="features">🚀 Features</h2>
<ul>
  <li>User Registration Form with validation</li>
  <li>Login and Logout functionality</li>
  <li>React Toastify for alert notifications</li>
  <li>Chakra UI for layout and styling</li>
  <li>Data persistence using localStorage for registered users</li>
</ul>

<h2 id="installation">⚙️ Installation</h2>

<ol>
  <li>Clone the repository:</li>

<pre>
<code>git clone https://github.com/afifudin24/formValidation.git</code>
</pre>

  <li>Navigate to the project directory:</li>

<pre>
<code>cd your-repo-name</code>
</pre>

  <li>Install dependencies:</li>

<pre>
<code>npm install</code>
</pre>

  <li>Start the development server:</li>

<pre>
<code>npm start</code>
</pre>

</ol>

<h2 id="usage">📖 Usage</h2>

<p>This project includes three main functionalities: Register, Login, and Logout. The application uses Chakra UI for styling and layout, react-toastify for displaying alerts, and localStorage to store user information. Below is an overview of each feature:</p>

<h3>Register</h3>
<p>
  The registration form allows users to sign up by entering a username, email, and password. Upon successful registration, the user’s data is stored in the browser’s <code>localStorage</code>, and a success notification is displayed using <code>react-toastify</code>.
</p>

<h3>Login</h3>
<p>
  Users can log in by providing the username and password they registered with. The credentials are validated against the stored data in <code>localStorage</code>. Upon successful login, a success notification is displayed.
</p>

<h3>Logout</h3>
<p>
  The logout functionality clears the user’s session, allowing them to log out. After logging out, the user is redirected to the login page.
</p>

<h3>Form Validation</h3>
<p>
  Both the Register and Login forms include validation to ensure that all required fields are filled, the email format is valid, and the password meets minimum requirements.
</p>

<h2 id="technologies-used">🛠️ Technologies Used</h2>
<ul>
  <li><strong>React</strong>: Frontend framework</li>
  <li><strong>Chakra UI</strong>: For layout and component styling</li>
  <li><strong>react-toastify</strong>: For alert notifications</li>
  <li><strong>localStorage</strong>: For storing registered user data</li>
</ul>

<h2 id="contributing">🤝 Contributing</h2>
<p>Contributions, issues, and feature requests are welcome! Feel free to check the <a href="https://github.com/yourusername/your-repo-name/issues">issues page</a> if you want to contribute.</p>

<h2 id="license">📝 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>

