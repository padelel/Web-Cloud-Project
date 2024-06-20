    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
    import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDzURQckDxjVYzWHcRSfq0VTBjqwQYhUg0",
        authDomain: "brew-bounty-admin.firebaseapp.com",
        projectId: "brew-bounty-admin",
        storageBucket: "brew-bounty-admin.appspot.com",
        messagingSenderId: "108525876940",
        appId: "1:108525876940:web:e8eff02f81f9425d65f469",
        measurementId: "G-124F208GM2",
        databaseURL: "https://brew-bounty-admin-default-rtdb.asia-southeast1.firebasedatabase.app",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const storage = getStorage(app);

    document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');
        const name = urlParams.get('name');
        const price = urlParams.get('price');
        const description = urlParams.get('description');
        const imageURL = urlParams.get('imageURL');

        // Mengisi nilai form dengan data yang diterima dari URL
        document.getElementById('itemName').value = name;
        document.getElementById('itemPrice').value = price;
        document.getElementById('itemDescription').value = description;

        // Handler untuk form edit
        document.getElementById('editForm').addEventListener('submit', (e) => {
            e.preventDefault();

            const newName = document.getElementById('itemName').value;
            const newPrice = document.getElementById('itemPrice').value;
            const newDescription = document.getElementById('itemDescription').value;

            const updatedItem = {
                name: newName,
                price: newPrice,
                description: newDescription
            };

            const itemRef = ref(database, `menu/${key}`);
            update(itemRef, updatedItem).then(() => {
                console.log('Item updated successfully');
                // Redirect kembali ke halaman admin.html setelah update
                window.location.href = 'admin.html';
            }).catch((error) => {
                console.error('Error updating item:', error);
                // Menampilkan pesan error jika perlu
            });
        });
    });
