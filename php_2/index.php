<?php
// Define constants for the database connection
define("DB_SERVER", "localhost");  // Database server address
define("DB_USERNAME", "root");     // Default MAMP MySQL username
define("DB_PASSWORD", "root");     // Default MAMP MySQL password
define("DB_DATABASE", "shalom_wellness");  // Database name

// Create a connection to the database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to add a new client
function addClient($full_name, $email, $phone, $conn) {
    $stmt = $conn->prepare("INSERT INTO clients (full_name, email, phone_number) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $full_name, $email, $phone);
    return $stmt->execute();
}

// Handle form submission to add a new client
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['add_client'])) {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    
    if (addClient($full_name, $email, $phone, $conn)) {
        echo "<p style='color: green;'>Client added successfully!</p>";
    } else {
        echo "<p style='color: red;'>Error: " . $stmt->error . "</p>";
    }
}

// Fetch all clients from the database
$result = $conn->query("SELECT * FROM clients");

// Define an associative array for client data (for demonstration purposes)
$clients_data = [
    "John Doe" => ["email" => "johndoe@example.com", "phone" => "123-456-7890"],
    "Jane Smith" => ["email" => "janesmith@example.com", "phone" => "234-567-8901"]
];

// Define a multi-dimensional array for drink preferences (for demonstration purposes)
$drinks = [
    "Save Your Breath" => ["Pineapple", "Orange", "Lemon"],
    "Embrace Yourself" => ["Carrot", "Orange", "Ginger"]
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Client Subscription List</h1>

    <!-- Form to add a new client -->
    <form method="POST">
        <label for="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>

        <button type="submit" name="add_client">Add Client</button>
    </form>

    <!-- Table to list all clients -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            <?php if ($result->num_rows > 0): ?>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?= htmlspecialchars($row['id']); ?></td>
                        <td><?= htmlspecialchars($row['full_name']); ?></td>
                        <td><?= htmlspecialchars($row['email']); ?></td>
                        <td><?= htmlspecialchars($row['phone_number']); ?></td>
                    </tr>
                <?php endwhile; ?>
            <?php else: ?>
                <tr>
                    <td colspan="4" style="text-align: center;">No clients found</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>

    <h2>Clients (Associative Array Example)</h2>
    <!-- Display client data from associative array -->
    <?php foreach ($clients_data as $name => $info): ?>
        <p>Client: <?= $name ?><br>Email: <?= $info['email'] ?><br>Phone: <?= $info['phone'] ?></p>
    <?php endforeach; ?>

    <h2>Drink Preferences (Multi-dimensional Array Example)</h2>
    <!-- Display drinks and their ingredients from multi-dimensional array -->
    <?php foreach ($drinks as $drink => $ingredients): ?>
        <p>Drink: <?= $drink ?><br>Ingredients: <?= implode(", ", $ingredients) ?></p>
    <?php endforeach; ?>
</body>
</html>

<?php
// Close the database connection
$conn->close();
?>