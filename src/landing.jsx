import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Model({ mousePosition }) {
    const { scene, camera } = useThree();
    const modelRef = useRef();

    useEffect(() => {
        // Initialize GLTFLoader to load the 3D model
        const loader = new GLTFLoader();
        loader.load(
            '/robo_baby_head.glb', // Ensure this path is correct, relative to the public folder
            (gltf) => {
                modelRef.current = gltf.scene;
                modelRef.current.scale.set(2, 2, 2); // Adjust the scale values as necessary
                modelRef.current.position.set(3, 0, 0); // Change these values to set the desired position
                modelRef.current.rotation.set(0, 0, 0);// Change these values to set the desired rotation
                scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        return () => {
            // Clean up and remove the model from the scene
            if (modelRef.current) {
                scene.remove(modelRef.current);
                modelRef.current = null; // Clear the reference to avoid memory leaks
            }
        };
    }, [scene]);

    // Rotate the model to face the cursor
    useFrame(() => {
        if (modelRef.current && camera) {
            const vector = new THREE.Vector3(mousePosition.x, mousePosition.y, 1); // Z value is set to 1 to project to the scene
            vector.unproject(camera); // Use the camera for unprojecting the mouse position
            modelRef.current.lookAt(vector);
        }
    });

    return null; // This component only loads the model into the scene
}

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track the mouse position
    const handleMouseMove = (event) => {
        setMousePosition({
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        });
    };

    return (
        <div onMouseMove={handleMouseMove} style={{ height: '100vh', background: "transparent" }}>

            <Box component="section" sx={{ p: 5, height: "80vh", width: '90%', m: 5, borderRadius: '20px' }}>
                <Stack direction="row" spacing={8} sx={{ alignContent: 'flex-start' }}>
                    <Box component="section" sx={{ p: 5, maxWidth: '50%' }}>
                        <Typography
                            sx={{
                                typography: { xs: "h4", lg: "h3" },
                                textAlign: 'center', mb: 3,
                                color: '#e6e6fa', // Light purple text color
                                textShadow: `
                          0 0 4px #e6e6fa,
                          0 0 8px #e6e6fa,
                          0 0 12px #d8bfd8,
                          0 0 16px #d8bfd8
                        `,
                                transition: 'text-shadow 0.3s ease-in-out', // Optional transition for hover effect
                                '&:hover': {
                                    textShadow: `
                            0 0 10px #e6e6fa,
                            0 0 20px #e6e6fa,
                            0 0 25px #d8bfd8,
                            0 0 30px #d8bfd8
                          `,
                                },
                            }}
                        >Transforming Dreams into Reality\nOne Start-Up at a Time!</Typography>
                        <Typography
                            // variant='h5'
                            sx={{ textAlign: 'center', color: 'white', typography: { xs: "h6", lg: "h5" }, }}>
                            Welcome to the Entrepreneurial Cell of VIT Bhopal, a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India. The future of your idea begins here, at the Entrepreneurial Cell of VIT Bhopal - where we don't just promote entrepreneurs, we build success stories.                        </Typography>
                    </Box>

                    <Canvas sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <ambientLight intensity={2.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={<div>Loading model...</div>}>
                            <Model mousePosition={mousePosition} />
                        </Suspense>
                        <OrbitControls enableZoom={false} />

                    </Canvas>


                </Stack>

            </Box>
        </div>
    );
}

export default App;
