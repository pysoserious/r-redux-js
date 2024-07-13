from flask import Flask, jsonify, request

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return "Welcome to the Flask server!"

# Example route to get user info
@app.route('/user/<username>', methods=['GET'])
def get_user(username):
    user = {
        'username': username,
        'email': f'{username}@example.com'
    }
    return jsonify(user)

# Example route to create a new user
@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    user = {
        'username': username,
        'email': email
    }
    return jsonify(user), 201

# Example route to update user info
@app.route('/user/<username>', methods=['PUT'])
def update_user(username):
    data = request.get_json()
    email = data.get('email')
    user = {
        'username': username,
        'email': email
    }
    return jsonify(user)

# Example route to delete a user
@app.route('/user/<username>', methods=['DELETE'])
def delete_user(username):
    return jsonify({'message': f'User {username} deleted'}), 200

if __name__ == '__main__':
    app.run(debug=True)
