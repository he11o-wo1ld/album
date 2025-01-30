import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Heart } from 'lucide-react';

import Gallery1 from '../assets/img/perfect.jpg'
// yehape apne hisaab se manually jitne images chaiye import krlo same exact isi format mei.. 


// just url ki jagah gallery2, gallery3 aisa krke krte jao
const galleryImages = [
  {
    id: 1,
    url: Gallery1,
    caption: 'Love you to the moon and back'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500',
    caption: 'Every moment with you is magical'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500',
    caption: 'Forever yours'
  }
];

function ForYouPage() {
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [showHeartAnimation, setShowHeartAnimation] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    const filtered = galleryImages.filter(image => {
      const caption = (image.caption || '').toLowerCase();
      const query = searchQuery.toLowerCase();
      return caption.includes(query);
    });
    setFilteredImages(searchQuery ? filtered : galleryImages);
  }, [searchQuery]);

  const handleDoubleClick = (imageId: number) => {
    if (!likedImages.includes(imageId)) {
      setLikedImages([...likedImages, imageId]);
      setShowHeartAnimation({ ...showHeartAnimation, [imageId]: true });
      setTimeout(() => {
        setShowHeartAnimation({ ...showHeartAnimation, [imageId]: false });
      }, 1000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">For You ♡</h1>
        

        {/* Optional Caption Search */}

        {/* <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search captions..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div> */}

        {filteredImages.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No images found with that caption</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid"
              >
                <div 
                  className="relative group cursor-pointer"
                  onDoubleClick={() => handleDoubleClick(image.id)}
                >
                  <img
                    src={image.url}
                    alt={image.caption || 'Love'}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                  {image.caption && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-end">
                      <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </p>
                    </div>
                  )}
                  {showHeartAnimation[image.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart 
                        size={80} 
                        className="text-white animate-like" 
                        fill="white"
                      />
                    </div>
                  )}
                  {likedImages.includes(image.id) && (
                    <Heart 
                      size={24} 
                      className="absolute top-4 right-4 text-white" 
                      fill="white"
                    />
                  )}
                </div>
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}

export default ForYouPage;