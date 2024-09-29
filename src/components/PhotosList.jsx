import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
const PhotosList = ({ album }) => {
  const { isFetching, data, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  //   console.log(res);
  const handleAddPhoto = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = (
      <div
        style={{ width: "50%" }}
        className="mx-8 flex flex-row flex-wrap justify-evenly "
      >
        <Skeleton className="h-20 w-20" times={4} />
      </div>
    );
  } else if (error) {
    content = <div>Error Fetching Error....</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
