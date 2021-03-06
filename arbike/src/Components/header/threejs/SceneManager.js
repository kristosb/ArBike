import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
export default function canvas(canvas)  {

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    //console.log(screenDimensions);
    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    
    

    function buildScene() {
        const scene = new THREE.Scene();
        //scene.background = new THREE.Color("#FFF");
        scene.background = new THREE.Color('black');

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        renderer.xr.enabled = true;
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 
        
        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 75;
        const nearPlane = 0.1;
        const farPlane = 50; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        //camera.position.z = 40;
        camera.position.set(0, 1.6, 0);

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene)
        ];

        return sceneSubjects;
    }

    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        //updateCameraPositionRelativeToMouse();

        renderer.render(scene, camera);
    }

    /*function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
        camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
        camera.lookAt(origin);
    }*/

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    /*function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }*/

    function vrButtonGet()
    {
        return VRButton.createButton( renderer );
    }
    function vrRender(ren){
        renderer.setAnimationLoop(ren);
    }
    return {
        update,
        onWindowResize,
        //onMouseMove,
        vrButtonGet,
        vrRender
    }
}