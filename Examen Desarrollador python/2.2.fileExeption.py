def exeption_func(path):
    try:
        file = open(path, 'r')
        return base64.b64encode(file)
    except :
        print('A ocurrido un error')



exeption_func('./hola.txt')