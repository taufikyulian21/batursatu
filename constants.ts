import { AksaraData, SandhanganData } from './types';

export const NGLEGENA_DATA: AksaraData[] = [
  { char: 'ꦲ', latin: 'Ha', pasangan: '◌꧀ꦲ', pasanganPos: 'sejajar' },
  { char: 'ꦤ', latin: 'Na', pasangan: '◌꧀ꦤ', pasanganPos: 'sejajar' },
  { char: 'ꦕ', latin: 'Ca', pasangan: '◌꧀ꦕ', pasanganPos: 'bawah' },
  { char: 'ꦫ', latin: 'Ra', pasangan: '◌꧀ꦫ', pasanganPos: 'bawah' },
  { char: 'ꦏ', latin: 'Ka', pasangan: '◌꧀ꦏ', pasanganPos: 'bawah' },
  { char: 'ꦢ', latin: 'Da', pasangan: '◌꧀ꦢ', pasanganPos: 'bawah' },
  { char: 'ꦠ', latin: 'Ta', pasangan: '◌꧀ꦠ', pasanganPos: 'bawah' },
  { char: 'ꦱ', latin: 'Sa', pasangan: '◌꧀ꦱ', pasanganPos: 'sejajar' },
  { char: 'ꦮ', latin: 'Wa', pasangan: '◌꧀ꦮ', pasanganPos: 'bawah' },
  { char: 'ꦭ', latin: 'La', pasangan: '◌꧀ꦭ', pasanganPos: 'bawah' },
  { char: 'ꦥ', latin: 'Pa', pasangan: '◌꧀ꦥ', pasanganPos: 'sejajar' },
  { char: 'ꦝ', latin: 'Dha', pasangan: '◌꧀ꦝ', pasanganPos: 'bawah' },
  { char: 'ꦗ', latin: 'Ja', pasangan: '◌꧀ꦗ', pasanganPos: 'bawah' },
  { char: 'ꦪ', latin: 'Ya', pasangan: '◌꧀ꦪ', pasanganPos: 'bawah' },
  { char: 'ꦚ', latin: 'Nya', pasangan: '◌꧀ꦚ', pasanganPos: 'bawah' },
  { char: 'ꦩ', latin: 'Ma', pasangan: '◌꧀ꦩ', pasanganPos: 'bawah' },
  { char: 'ꦒ', latin: 'Ga', pasangan: '◌꧀ꦒ', pasanganPos: 'bawah' },
  { char: 'ꦧ', latin: 'Ba', pasangan: '◌꧀ꦧ', pasanganPos: 'bawah' },
  { char: 'ꦛ', latin: 'Tha', pasangan: '◌꧀ꦛ', pasanganPos: 'bawah' },
  { char: 'ꦔ', latin: 'Nga', pasangan: '◌꧀ꦔ', pasanganPos: 'bawah' },
];

export const SANDHANGAN_DATA: SandhanganData[] = [
  // Sandhangan Swara
  { char: '◌ꦸ', name: 'Suku', latin: 'u', type: 'swara', description: 'Mengubah vokal a menjadi u', example: 'ꦧꦸꦏꦸ', exampleLatin: 'Buku' },
  { char: '◌ꦶ', name: 'Wulu', latin: 'i', type: 'swara', description: 'Mengubah vokal a menjadi i', example: 'ꦱꦶꦗꦶ', exampleLatin: 'Siji' },
  { char: '◌ꦼ', name: 'Pepet', latin: 'e (seperti elang)', type: 'swara', description: 'Mengubah vokal a menjadi e (pepet)', example: 'ꦱꦼꦒ', exampleLatin: 'Sega' },
  { char: '◌é', name: 'Taling', latin: 'é (seperti éso)', type: 'swara', description: 'Mengubah vokal a menjadi é (taling)', example: 'ꦭéꦭé', exampleLatin: 'Lélé' }, // Simplified logic for display, real taling goes before char
  { char: '◌o', name: 'Taling Tarung', latin: 'o', type: 'swara', description: 'Mengubah vokal a menjadi o', example: 'ꦱoꦠo', exampleLatin: 'Soto' },
  
  // Sandhangan Panyigeg Wanda
  { char: '◌ꦃ', name: 'Wignyan', latin: 'h', type: 'panyigeg', description: 'Mati h di akhir suku kata', example: 'ꦒꦗꦃ', exampleLatin: 'Gajah' },
  { char: '◌ꦂ', name: 'Layar', latin: 'r', type: 'panyigeg', description: 'Mati r di akhir suku kata', example: 'ꦥꦱꦂ', exampleLatin: 'Pasar' },
  { char: '◌ꦁ', name: 'Cecak', latin: 'ng', type: 'panyigeg', description: 'Mati ng di akhir suku kata', example: 'ꦏꦕꦁ', exampleLatin: 'Kacang' },
  { char: '◌꧀', name: 'Pangkon', latin: 'mati', type: 'panyigeg', description: 'Mematikan vokal huruf terakhir', example: 'ꦧꦥꦏ꧀', exampleLatin: 'Bapak' },
];
