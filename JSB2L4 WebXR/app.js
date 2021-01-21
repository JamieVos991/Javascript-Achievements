//voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-6.138, 0.888, -5.329);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, -300.000, 0); 

//create a model
const stall2 = new Model('assets/models/stall2/scene.gltf');
stall2.setPosition(-1.983, 1.371, -3.141);
stall2.setScale(100, 100, 100);
stall2.setRotation(0, -300.000, 0); 

//create cuberoom
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf')
cuberoom.setPosition(-2.50535, 0.91001, -3.21484);
cuberoom.setScale(-1.170, 0.984, 0.902);
cuberoom.setRotation(0, -36.95, 0);

//create some text
const lamText = new Text('Lisser Art Museum');
lamText.setPosition(-8.047, 3.746, -5.447);
lamText.setFontsize(11);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, 50.000, 0);
lamText.setColor('white')

//create an image1
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(2.413,  2.288, -4.997);
image1.setRotation(-0.740, -34.670, 0);
image1.setScale(1.5, 1.5, 1.5);

image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Food Chain Project’ van kunstenaar Itamar Gilboa.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
    
//create an image2
const image2 = new XRImage('assets/images/Lisse-051.jpg');
image2.setPosition(-2.270, 2.288, 2.531);
image2.setRotation(0, -40, 0);
image2.setScale(1.5, 1.5, 1.5);

//create an image3
const image3 = new XRImage('assets/images/Lisse-050.jpg');
image3.setPosition(1.709, 2.288, 0.837);
image3.setRotation(0, 52.430, 0);
image3.setScale(1.5, 1.5, 1.5);

//create an image4
const image4 = new XRImage('assets/images/Lisse-052.jpg');
image4.setPosition(-5.052, 2.288, 0.454);
image4.setRotation(-0.740, -34.670, 0);
image4.setScale(1.5, 1.5, 1.5);

//create an image5
const image5 = new XRImage('assets/images/Lisse-053.jpg');
image5.setPosition(-2.844, 2.288, -8.925);
image5.setRotation(-0.740, -40.00, 0);
image5.setScale(1.5, 1.5, 1.5);


//create a primitive (cylinder)
const cylinder = new Cylinder();
cylinder.setColor('grey')
cylinder.setRadius(0.5);
cylinder.setPosition(0, 1.414, 1.365);
cylinder.setScale(1.5, 8.640, 1.5,)

/*create a 360 image
const image360 = new Sky('assets/LamIngang.jpg'); */

const spotLight = new SpotLight();
spotLight.setPosition(1, 9, 3.9);
spotLight.setTarget(cuberoom);

//listen for an event
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Werkplaats van kunstenaar Folkert de Jong");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Sabine Tol");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
melkMeisje.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");

