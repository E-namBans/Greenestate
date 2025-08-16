function applyFilters() {
      const locationInput = document.getElementById("searchLocation").value.toLowerCase();
      const bedroomsInput = document.getElementById("bedrooms").value;
      const statusInput = document.getElementById("status").value;

      const properties = document.querySelectorAll(".property-card");

      properties.forEach(property => {
        const location = property.getAttribute("data-location").toLowerCase();
        const bedrooms = property.getAttribute("data-bedrooms");
        const status = property.getAttribute("data-status").toLowerCase();

        let visible = true;

        if (locationInput && !location.includes(locationInput)) visible = false;
        if (bedroomsInput && bedrooms !== bedroomsInput) visible = false;
        if (statusInput && status !== statusInput) visible = false;

        property.style.display = visible ? "block" : "none";
      });
    }