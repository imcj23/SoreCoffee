import { useState, useEffect } from 'react';
import { faSyncAlt, faHeart, faComment, faPlay, faInstagram } from 'react-icons/fa';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InstagramSection = () => {
    const [instagramData, setInstagramData] = useState({
        followers: 0,
        posts: [],
        username: '',
        loading: true,
        error: null
    });

    const fetchInstagramData = async () => {
        try {
            const response = await axios.get('/api/instagram-data');
            
            if (response.data.success) {
                setInstagramData({
                    followers: response.data.followers,
                    posts: response.data.posts.slice(0, 9),
                    username: response.data.username,
                    loading: false,
                    error: null
                });
            }
        } catch (error) {
            setInstagramData(prev => ({
                ...prev,
                loading: false,
                error: 'Gagal memuat data Instagram'
            }));
        }
    };

    useEffect(() => {
        fetchInstagramData();
        
        // Refresh setiap 5 menit
        const interval = setInterval(fetchInstagramData, 300000);
        
        return () => clearInterval(interval);
    }, []);

    // Format angka followers
    const formatFollowers = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toLocaleString();
    };

    if (instagramData.loading) {
        return (
            <section className="py-12 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mb-4"></div>
                        <p className="text-gray-600">Memuat feed Instagram...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (instagramData.error) {
        return (
            <section className="py-12 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-8">
                        <p className="text-red-500 mb-4">{instagramData.error}</p>
                        <button 
                            onClick={fetchInstagramData}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                        >
                            Coba Lagi
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4 mb-6 md:mb-0">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                                className="text-white text-3xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                @{instagramData.username}
                            </h2>
                            <div className="flex items-center space-x-3 mt-2">
                                <span className="text-2xl font-bold text-gray-900">
                                    {formatFollowers(instagramData.followers)}
                                </span>
                                <span className="text-gray-600 text-sm md:text-base">
                                    Followers
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <a 
                        href={`https://instagram.com/${instagramData.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Follow on Instagram
                    </a>
                </div>

                {/* Instagram Feed Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                    {instagramData.posts.map((post, index) => (
                        <div 
                            key={post.id || index} 
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <a 
                                href={post.permalink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block relative"
                            >
                                {/* Image/Video Container */}
                                <div className="aspect-square overflow-hidden bg-gray-200">
                                    {post.media_type === 'VIDEO' ? (
                                        <div className="relative w-full h-full">
                                            <img 
                                                src={post.media_url} 
                                                alt={post.caption?.substring(0, 50) || 'Instagram post'} 
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-90 w-12 h-12 rounded-full flex items-center justify-center">
                                                    <FontAwesomeIcon 
                                                        icon={faPlay} 
                                                        className="text-pink-500 text-lg ml-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <img 
                                            src={post.media_url} 
                                            alt={post.caption?.substring(0, 50) || 'Instagram post'} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <div className="flex space-x-4 mb-2">
                                            <span className="flex items-center space-x-1">
                                                <FontAwesomeIcon icon={faHeart} className="text-white" />
                                                <span className="font-medium">Like</span>
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <FontAwesomeIcon icon={faComment} className="text-white" />
                                                <span className="font-medium">Comment</span>
                                            </span>
                                        </div>
                                        {post.caption && (
                                            <p className="text-sm line-clamp-2">
                                                {post.caption.substring(0, 100)}...
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Corner Gradient */}
                                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-2xl"></div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer with Refresh Button */}
                <div className="text-center pt-6 border-t border-gray-200">
                    <button 
                        onClick={fetchInstagramData}
                        className="inline-flex items-center space-x-2 bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                        <FontAwesomeIcon 
                            icon={faSyncAlt} 
                            className={`${instagramData.loading ? 'animate-spin' : ''}`}
                        />
                        <span>Refresh Feed</span>
                    </button>
                    
                    {/* Live Indicator */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-600 text-sm">Live updates every 5 minutes</span>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="text-3xl font-bold text-gray-800 mb-2">
                            {instagramData.posts.length}
                        </div>
                        <div className="text-gray-600">Posts Displayed</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="text-3xl font-bold text-gray-800 mb-2">
                            {formatFollowers(instagramData.followers)}
                        </div>
                        <div className="text-gray-600">Total Followers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="text-3xl font-bold text-gray-800 mb-2">
                            @{instagramData.username}
                        </div>
                        <div className="text-gray-600">Instagram Handle</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;