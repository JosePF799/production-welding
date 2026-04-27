# Production Welding Website

Static website for Production Welding at productionwelding.org.

## Business details used

- Phone: (510) 589-4985
- Email: Ismael@Productionwelding.org
- Service model: mobile welding and shop work, no public shop address
- Service area: the Bay Area
- Positioning: certified and insured welder

## City landing pages

The city landing pages mirror the Pro Fence city set:

- Hayward: hayward-mobile-welding.html
- Oakland: oakland-mobile-welding.html
- San Jose: san-jose-mobile-welding.html
- San Francisco: san-francisco-mobile-welding.html
- Alameda: alameda-mobile-welding.html
- Berkeley: berkeley-mobile-welding.html
- San Mateo: san-mateo-mobile-welding.html
- South San Francisco: south-san-francisco-mobile-welding.html
- Fremont: fremont-mobile-welding.html

## Service pages

- Mobile Welding: mobile-welding.html
- Gate and Railing Welding: gate-railing-welding.html
- Trailer and Equipment Repair: trailer-equipment-repair.html
- Custom Metal Fabrication: custom-metal-fabrication.html
- Commercial Welding: commercial-welding.html

## Reviews

Production Welding has 13 Google reviews according to the business owner. This build includes 7 public review snippets I could verify from the existing public website/search result. Add the remaining Google review text/screenshots to build-site.js before publishing them on the testimonials page.

## Gallery photos

The original uploaded project photos are in the root Gallery folder. Optimized web copies and thumbnails are generated under assets/gallery/ with filenames like:

- production-welding-project-01.jpg
- thumb-production-welding-project-01.jpg

gallery.html is generated from the optimized files in assets/gallery/.

After editing build-site.js, run:

```powershell
node build-site.js
```
