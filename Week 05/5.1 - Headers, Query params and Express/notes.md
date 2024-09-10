
## Short Notes on Fetch vs Axios

### 1. Fetch
- Fetch is built into modern browsers and doesn't require any external library.
- After fetching the response, it needs to be converted into JSON manually using `.json()`.
- Example:
  ```js
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json(); // Convert to JSON
  console.log(data.title);
  ```

### 2. Axios
- Axios is a third-party library that automatically converts responses into JSON.
- You can directly access the data using `res.data`.
- Example:
  ```js
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res.data.title); // Access JSON data
  ```

### Key Difference
- **Fetch**: You need to convert the response to JSON manually.
- **Axios**: JSON conversion is handled automatically.
