
// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <video
//         className="hero-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source
//           src="/HeroVideo/66b81089fdb849049411c311571f387b.HD-1080p-2.5Mbps-37248255.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//       <div className="hero-content">
//         <h1>TAKE YOUR TRAINING TO THE NEXT LEVEL</h1>
//         <p>Premium Quality Gym Gear for Elite Athletes</p>
//         <button className="hero-btn">Shop Now</button>
//       </div>
//     </div>
//   );
// };
// export default HeroSection;



const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/HeroVideo/66b81089fdb849049411c311571f387b.HD-1080p-2.5Mbps-37248255.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">TAKE YOUR TRAINING TO THE NEXT LEVEL</h1>
        <p className="text-lg md:text-xl mb-6">Premium Quality Gym Gear for Elite Athletes</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default HeroSection;
