import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dragonball } from '../../services/dragonball';

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './character-detail-page.html',
  styleUrl: './character-detail-page.css'
})
export class CharacterDetailPage {

  route = inject(ActivatedRoute);

  dragonballService = inject(Dragonball);

    private cdr = inject(ChangeDetectorRef);


  character: any;

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.dragonballService.getCharacterById(id).subscribe((response: any) => {

      console.log(response);
        this.character = response;
        this.cdr.markForCheck();

      });


    }

  }

}

