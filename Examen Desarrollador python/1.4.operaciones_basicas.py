# Esta función  permite relizar operaciones basicas, suma resta multiplicacion y division dada una cadena
# Lo primero que hice fue buscar si existian operadores
# Posterirmente hice split a la cadena, como existen leyes de los operadores de importancia empece con los de menor importancia, con la finalidad de que al ingresar al las funciones recursivas internas
# Pueda obtener en prioridad y resolver las de mayor importancia

def operator(operation):
    if ('-' in operation or '+' in operation or '*' in operation or '/' in operation):
        if ('-' in operation):
            #print('Entra -')
            split = operation.split('-')
            pos = 0
            resp = 0
            #print('split -', split)
            for x in split:
                r = operator(x)
                if (pos == 0):
                    resp = r
                else:
                    resp = resp - r
                pos += 1
                #print('resp_post_op -', resp, pos, r)
            return resp
    if ('+' in operation):
        #print('Entra +')
        split = operation.split('+')
        pos = 0
        resp = 0
        #print('split +', split)
        for x in split:
            r = operator(x)
            if (pos == 0):
                resp = r
            else:
                resp = resp + r
            pos += 1

            #print('resp_post_op +', resp, pos, r)
        return resp
    if ('/' in operation):
        #print('Entra /')
        split = operation.split('/')
        pos = 0
        resp = 0
        #print('split /', split)
        for x in split:
            r = operator(x)
            if (pos == 0):
                resp = r
            else:
                resp = resp / r
            pos += 1

            #print('resp_post_op /', resp, pos, r)
        return resp
    if ('*' in operation):
        #print('Entra *')
        split = operation.split('*')
        pos = 0
        resp = 0
        #print('split *', split)
        for x in split:
            r = operator(x)
            if (pos == 0):
                resp = r
            else:
                resp = resp * r
            pos += 1
            #print('resp_post_op *', resp, pos, r)
        return resp
    else:
        return float(operation)


print(operator('5+5*3-1/2'))
print(operator('13+7*33-10/2'))
print(operator('5+5'))
print(operator('5*5'))
print(operator('5*5+5'))
print(operator('5/5'))
print(operator('55'))

