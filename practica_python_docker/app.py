from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Necesario para usar flash messages

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Procesar el formulario de contacto
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Aquí podrías agregar la lógica para enviar un email o almacenar los datos en una base de datos
        flash('Message sent successfully!', 'success')
        return redirect(url_for('home'))
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
