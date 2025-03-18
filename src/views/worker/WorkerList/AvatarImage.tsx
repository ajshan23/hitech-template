import { useState } from 'react';
import Avatar from '@/components/ui/Avatar';
import Upload from '@/components/ui/Upload';
import { HiOutlinePlus } from 'react-icons/hi';

interface AvatarImageProps {
  onFileUpload: (files: File[]) => void;
}

const AvatarImage = ({ onFileUpload }: AvatarImageProps) => {
  const [avatarImg, setAvatarImg] = useState<string | null>(null);

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      setAvatarImg(URL.createObjectURL(files[0])); // Set the image preview
      onFileUpload(files); // Pass the uploaded files to the parent component
    }
  };

  const beforeUpload = (files: FileList | null) => {
    let valid: string | boolean = true;

    const allowedFileType = ['image/jpeg', 'image/png'];
    if (files) {
      for (const file of files) {
        if (!allowedFileType.includes(file.type)) {
          valid = 'Please upload a .jpeg or .png file!';
        }
      }
    }

    return valid;
  };

  return (
    <div>
      <Upload
        className="cursor-pointer"
        showList={false}
        uploadLimit={1}
        beforeUpload={beforeUpload}
        onChange={handleFileUpload}
      >
        <Avatar size={80} src={avatarImg as string} icon={<HiOutlinePlus />} />
      </Upload>
    </div>
  );
};

export default AvatarImage;