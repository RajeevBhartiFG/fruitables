"use client"
import { useEffect } from "react"

export default function BootstrapClient(){
    useEffect(() => {import("bootstrap/dist/js/bootstrap");}, []);
    return (
    <div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>
    </div>
    )
}