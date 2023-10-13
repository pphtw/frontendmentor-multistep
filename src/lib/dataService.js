class DataService {
  async getData(item) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${item}`, {
        method: "GET",
      });
      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.statusText);
      }
    } catch (error) {
      console.error(`ERROR GET DATA: ${error.message}`);
    }
  }

  async addData(data) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/submitData`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        return response.status;
      } else {
        return Promise.reject(response.statusText);
      }
    } catch (error) {
      console.error(`ERROR GET DATA: ${error.message}`);
    }
  }
}

export default DataService;
