import { useState, useMemo } from "react";
import PodcastGrid from "../views/renderGrid";
import PodcastModal from "./podcastModal";
import LoadingSpinner from "../utilities/loadingSpinner";
import ErrorDisplay from "../utilities/loadingError";
import useFetchPodcasts from "../utilities/fetchPodcasts";
import GenreFilter from "../utilities/genreFilter";
import Sorter from "../utilities/podcastSorter";

/**
 * Home Component
 * 
 * Main landing page of the podcast app.
 * @component
 */
const Home = () => {
    const [podcastsUrl] = useState("https://podcast-api.netlify.app/shows");
  
    // Fetch all podcasts
    const { 
        data: allPodcasts,
        isLoading, 
        error 
    } = useFetchPodcasts(podcastsUrl);

    // State for filtering and sorting
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [sortOrder, setSortOrder] = useState('desc');

    // Filter and sort podcasts
    const filteredAndSortedPodcasts = useMemo(() => {
        if (!allPodcasts || allPodcasts.length === 0) return [];

        // Filter by genre
        let filteredPodcasts = allPodcasts;
        if (selectedGenre !== 'all') {
            filteredPodcasts = allPodcasts.filter(podcast => 
                podcast.genres && podcast.genres.includes(parseInt(selectedGenre))
            );
        }

        // Sort by date
        return [...filteredPodcasts].sort((a, b) => {
            const dateA = new Date(a.updated || 0);
            const dateB = new Date(b.updated || 0);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
    }, [allPodcasts, selectedGenre, sortOrder]);

    // State for modal
    const [selectedPodcastId, setSelectedPodcastId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for error display
    // const [isErrorVisible, setIsErrorVisible] = useState(true);

    const handlePodcastSelect = (podcast) => {
        setSelectedPodcastId(podcast.id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPodcastId(null);
    };

    const handleGenreChange = (genreId) => {
        setSelectedGenre(genreId);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };


    // const handleDismissError = () => {
    //     setIsErrorVisible(false);
    // };

    if (isLoading) {
        return <LoadingSpinner />;
    }
    
    
    return (
        <div className="text-white px-12 py-6 flex  w-full gap-5">
            {/* Error Display */}
            {error && (
                <ErrorDisplay 
                message={`Failed to load podcasts: ${error}`}
                />
            )}

            {/* Podcast Modal */}
            <PodcastModal 
                podcastId={selectedPodcastId}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                allPodcasts={allPodcasts}
            />
        
            <div className="w-full flex flex-col gap-8">
                {/* Render error or grid for all podcasts */}
                {allPodcasts && allPodcasts.length > 0 ? (
                    <div>
                        <h2 className="font-bold text-2xl mb-2">All Podcasts</h2>

                        <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-start md:gap-3 md:mb-12">
                            <GenreFilter onGenreChange={handleGenreChange} />
                            <Sorter onSortChange={handleSortChange} />
                        </div>

                        <PodcastGrid 
                            podcasts={filteredAndSortedPodcasts} 
                            onPodcastSelect={handlePodcastSelect}
                        />
                    </div>
                ) : (
                    <p className="text-gray-400">No podcasts found</p>
                )}
            </div>
        </div>
    );
};

export default Home;