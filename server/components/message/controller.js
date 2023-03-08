const store = require('./store')

function addMsg(user, message, dest) {
    return new Promise((res, rej)=>{
        if(!user || !message){
            console.error('[msg controller] No hay usuarios o msg')
            rej('Empty data')
            return ;
        }
        const fullMessage = {
            user,
            dest,
            message,
            date: new Date()
        }
        store.add(fullMessage)
        res(fullMessage)
    })
}

function getMsgs(user) {
    return new Promise((res, rej)=>{
        res(store.messages(user))
    })
}

function updateMsg(id, message){
    return new Promise(async (res, rej)=>{
        if (!id || !message) {
            rej('Empty parameters')
            return ;
        }
        await store.upMessage(id, message)
        return res(store.messageId(id))
    })
}

function deleteMsg(id){
    return new Promise(async (res, rej)=>{
        if (!id) {
            rej('Empty parameters')
            return ;
        }
        return res(store.deleteMsg(id))
    })
}

module.exports = {
    addMsg,
    getMsgs,
    updateMsg,
    deleteMsg
}
/*

 /*
   * // numeros
  double employees = 3.14; // siempre requiere una precision
  int entero = 3;
  print('$employees - $entero');
  
  // Strings
  
  String nombre = 'Elieser';
  print(nombre[nombre.length - 1]);
   * */
  
  /*
   * bool activado = true;
  activado = !activado;
  
  if(activado){
    print('encendido');
  }else{
    print('apagado');
  }
   * */
  
 /*
  *  List<int> numeros = [1,2,3,4,5,6];
  print(numeros);
  numeros.add(7);
  print(numeros);
  
  List masNumeros = new List(10); // <- tamaño fijo
  
  print(masNumeros);
  * */
  /*
   * Map<String, dynamic> persona = {
    'nombre': 'Carlos',
    'soltero': true
    };
  
  Map personas = {
    1: 'elieser',
    2: 'porrero',
    3: {
      'perosna': 'david'
    },
    5: saludar
  };
  
  print(persona['nombre']);
  print(personas[3]['perosna']);
  personas.addAll({4: 'Alvarez'});
  print(personas);
  print(personas[2]);
  print(personas[5](saludo: 'mamawebaso', nombre: 'david'));  
  print(saludarCb(texto: 'Porros'));
   final wolverine = new Heroe(nombre:'Logan',
                              poder:'Regeneracion'
                             );
  // print(wolverine.poder + ' ' + wolverine.nombre);
  
  final rawJson = '{"nombre": "Clark", "poder": "volar"}';
  final parseJson = json.decode(rawJson);
  final superman = new Heroe.fromJson(parseJson);
  superman.setCompanero = 'Batman';
  print(superman.getCompanero);
  superman.setAno = 1985;
  print('media de comics por año: ${superman.getMediaDeComics}');
 

import 'dart:convert';

void main(){
  /*
   * // numeros
  double employees = 3.14; // siempre requiere una precision
  int entero = 3;
  print('$employees - $entero');
  
  // Strings
  
  String nombre = 'Elieser';
  print(nombre[nombre.length - 1]);
   * */
  
  /*
   * bool activado = true;
  activado = !activado;
  
  if(activado){
    print('encendido');
  }else{
    print('apagado');
  }
   * */
  
 /*
  *  List<int> numeros = [1,2,3,4,5,6];
  print(numeros);
  numeros.add(7);
  print(numeros);
  
  List masNumeros = new List(10); // <- tamaño fijo
  
  print(masNumeros);
  * */
  /*
   * Map<String, dynamic> persona = {
    'nombre': 'Carlos',
    'soltero': true
    };
  
  Map personas = {
    1: 'elieser',
    2: 'porrero',
    3: {
      'perosna': 'david'
    },
    5: saludar
  };
  
  print(persona['nombre']);
  print(personas[3]['perosna']);
  personas.addAll({4: 'Alvarez'});
  print(personas);
  print(personas[2]);
  print(personas[5](saludo: 'mamawebaso', nombre: 'david'));  
  print(saludarCb(texto: 'Porros'));
   final wolverine = new Heroe(nombre:'Logan',
                              poder:'Regeneracion'
                             );
  // print(wolverine.poder + ' ' + wolverine.nombre);
  
  final rawJson = '{"nombre": "Clark", "poder": "volar"}';
  final parseJson = json.decode(rawJson);
  final superman = new Heroe.fromJson(parseJson);
  superman.setCompanero = 'Batman';
  print(superman.getCompanero);
  superman.setAno = 1985;
  print('media de comics por año: ${superman.getMediaDeComics}');
 

  
  final perro = new Perro();
}


abstract class Animal{
  int patas;
  void sonido();
}

class Perro implements Animal{
  int patas;
  void sonidos(){
    
  }
}

/*
 * 
 * class Heroe{
   String nombre = '';
   String poder = '';
   String _companero = '';
   int _ano = 1984;
   final int _comicsMediosXano = 7;
   final int _release = 1984;
   Heroe({this.nombre = '',  this.poder = ''});
   Heroe.fromJson(Map parsedJson){
     nombre = parsedJson['nombre'];
     poder = parsedJson['poder'];
   }
  
   set setCompanero(String name){
      _companero = name;
   }
   get getCompanero => _companero;
   
  
   set setAno(int myAno){
     if(myAno < _release){
       throw('año invalido');
     }
     _ano = myAno;
   }
   int get getMediaDeComics => ((_ano + 1) - _release) * _comicsMediosXano;
   
   String toString() => 'nombre: $nombre\npoder: $poder';
}
 * String saludar({String saludo = 'hola', String nombre = 'Elieser'}){
  return 'hola $saludo, $nombre';
}

String saludarCb({String texto = ''})=> '$texto';
 
abstract class Animal{
  int patas = 0;
  void sonido();
}

class Perro implements Animal{
  int patas;
  int colas = 0;
  void sonido() => print('guau');
}

class Gato implements Animal{
  int patas;
  int colas = 0;
  void sonido() => print('miau');
}



* */