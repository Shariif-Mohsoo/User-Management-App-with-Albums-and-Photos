import { useRemovePhotoMutation } from "../store/index";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
const PhotosListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative m-2">
      <img className="h-20 w-20" src={photo.url} alt="random photo" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 ">
        <Button onClick={handleRemovePhoto} loading={results.isLoading}>
          <GoTrash className="text-3xl" />
        </Button>
      </div>
    </div>
  );
};

export default PhotosListItem;
