import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photos-desc',
  templateUrl: './photos-desc.component.html',
  styleUrls: ['./photos-desc.component.scss']
})
export class PhotosDescComponent implements OnInit {

  // dzialanie calego przycisku dodawania zdjec
  triggerFileInput(): void {
    const fileInput = document.getElementById('step-button') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }


  selectedFiles: any[] = [];

  onFileChange(event: any): void {
    const files = event.target.files;

    const fileReaders = Array.from(files).map((file: File) => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            file: file,
            preview: reader.result,
            name: file.name
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then((filesData: any) => {
      this.selectedFiles = [...this.selectedFiles, ...filesData];
      console.log(this.selectedFiles);
    });
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
