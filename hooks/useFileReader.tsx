import { ChangeEvent, useCallback, useState } from "react";

export interface useFileReaderProps {}

export default function useFileReader(props?: useFileReaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [blobUrls, setBlobUrls] = useState<string[]>([]);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement>, callbackFunc?: (arg: any) => void) => {
      if (!e.target.files) return;

      //Clean up blobUrl

      const fileReader = new FileReader();

      const filesData = e.target.files;

      setFiles(Array.from(filesData));

      fileReader.onload = async (e) => {
        const base64 = (await fileReader.result?.toString()) || "";

        callbackFunc?.(base64);
      };

      Array.from(filesData).forEach((file: File) => {
        fileReader.readAsDataURL(file);
      });

      //   setBlobUrls(blobsData);
    },
    []
  );

  return { files, blobUrls, onChangeFiles };
}
