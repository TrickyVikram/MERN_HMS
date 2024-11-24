import React from 'react';

// Import images

import hostel1 from '../../assets/img/portfolio/hostel2.jpg';
import hostel2 from '../../assets/img/portfolio/hostel3.jpg';
import hostel3 from '../../assets/img/portfolio/hostel4.jpg';
import hostel4 from '../../assets/img/portfolio/hostel5.jpg';
import hostel5 from '../../assets/img/portfolio/hostel6.jpg';
import hostel6 from '../../assets/img/portfolio/hostel7.jpg';
import Indoor from '../../assets/img/portfolio/Indoor-Games.jpg';







function GallerySection() {

  const galleryItems = [
    { src: hostel1, title: 'Hostel Room ' },
    { src: hostel2, title: 'Hostel Room' },
    { src: hostel3, title: 'Hostel Room' },
    { src: hostel4, title: 'Dinning Rooms' },
    { src: hostel5, title: 'sports Room' },
    { src: hostel1, title: 'Hostel Room' },
    { src: Indoor, title: 'sports Room' },

    { src: hostel6, title: 'Hostel Room' },
    { src: Indoor, title: 'sports Room' },




  ];

  // Function to split array into chunks of 4
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const rows = chunkArray(galleryItems, 3);

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Image Gallery</h2>
          </div>

          {rows.map((row, rowIndex) => (
            <div
              className="row portfolio-container grid grid-cols-3 gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
              key={rowIndex}
            >
              {row.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-item"
                >
                  <div className="portfolio-wrap">
                    <img
                      src={item.src}
                      className="img-fluid gallery-image"
                      alt={`Gallery image: ${item.title}`}
                    />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>





      <style jsx>{`

      .h2{
        margin-left: 199px;
      }
        .portfolio-item {
          padding: 15px;
              margin-left: 95px;

          
        }

        .portfolio-wrap {
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .gallery-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .portfolio-info {
          text-align: center;
          margin-top: 10px;
        }

        .portfolio-info h4 {
          font-size: 16px;
          font-weight: bold;
          margin: 0;
        }
      `}</style>





    </div>
  );
}


export default GallerySection;





// import React from 'react';

// // Dynamically load images from the folder
// const importAll = (requireContext) =>
//   requireContext.keys().map(requireContext);
// const images = importAll(
//   require.context('../../assets/img/portfolio', false, /\.(jpg|jpeg|png|gif)$/)
// );

// function GallerySection() {
//   const galleryItems = images.map((src, index) => ({
//     src,
//     title: `Gallery Image ${index + 1}`, // Customize titles as needed
//   }));

//   return (
//     <div>
//       <section id="portfolio" className="portfolio">
//         <div className="container" data-aos="fade-up">
//           <div className="section-title">
//             <h2>Image Gallery</h2>
//           </div>

//           <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="300">
//             {galleryItems.map((item, index) => (
//               <div key={index} className="col-lg-4 col-md-6 portfolio-item">
//                 <div className="portfolio-wrap">
//                   {/* Add a div to fix image size */}
//                   <div className="image-container">
//                     <img src={item.src} className="img-fluid" alt={`Gallery image: ${item.title}`} />
//                   </div>
//                   <div className="portfolio-info">
//                     <h4>{item.title}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Add custom CSS for styling */}
//       <style jsx>{`
//         .portfolio .portfolio-item .image-container {
//           width: 80%; /* Responsive */
//           height: 200px; /* Fixed height */
//           overflow: hidden; /* Crop overflow */
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .portfolio .portfolio-item .image-container img {
//           width: auto;
//           height: 100%; /* Scale to fit height */
//           max-width: 100%;
//         }

//         .portfolio .portfolio-item .portfolio-info {
//           text-align: center;
//           margin-top: 10px;
//         }

//         .portfolio .portfolio-item h4 {
//           font-size: 16px;
//           font-weight: bold;
//           margin: 0;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default GallerySection;

