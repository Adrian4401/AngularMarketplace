import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'photos-desc',
  templateUrl: './photos-desc.component.html',
  styleUrls: ['./photos-desc.component.scss']
})
export class PhotosDescComponent implements OnInit {
  @Output() descriptionChange = new EventEmitter<string>();
  selectedDescription: string | null = null;
  selectedFiles: any[] = [];

  // whole 'add photo' button working
  triggerFileInput(): void {
    const fileInput = document.getElementById('step-button') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onDescriptionChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.selectedDescription = target.value;
    if(this.selectedDescription) {
      this.descriptionChange.emit(this.selectedDescription)
    }
  }

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
