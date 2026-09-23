"""Build metadata-free, responsive derivatives from Tamer's selected Midjourney archive.

Run with: python scripts/build-art-gallery.py
The source archive is never modified. Only the explicit editorial selection is published.
"""
from pathlib import Path
import json
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = Path(r"C:\Users\Extreme\Tamer_Work\01_PROJECTS\Midjourney collections\01_Selected_Packs")
OUT = ROOT / "public" / "media" / "visual-art"
DATA = ROOT / "src" / "data" / "visualArt.json"

# category, file prefix, English editorial title, Arabic editorial title.
SELECTION = [
    ("palestine", "04_03", "Parallel Lives", "حيوات متوازية"),
    ("palestine", "04_04", "Worlds in Reflection", "عوالم في المرآة"),
    ("palestine", "04_05", "A Map With a Pulse", "خريطة تنبض"),
    ("palestine", "04_06", "Bride on Fractured Ground", "عروس على أرض متشققة"),
    ("palestine", "04_07", "Wall and Witness", "الجدار والشاهدة"),
    ("palestine", "04_08", "Threads of Place", "خيوط المكان"),
    ("palestine", "04_10", "Figures of Memory", "شخوص الذاكرة"),
    ("fashion", "01_03", "Color Sketch", "رسم بالألوان"),
    ("fashion", "01_04", "Studio Silhouette", "هيئة في الاستوديو"),
    ("fashion", "01_05", "The Editorial Frame", "الإطار التحريري"),
    ("fashion", "01_09", "Beach in Monochrome", "شاطئ بالأبيض والأسود"),
    ("fashion", "01_08", "Coastal Study", "دراسة ساحلية"),
    ("fashion", "01_10", "Mirror Study", "دراسة المرآة"),
    ("urban", "05_01", "City in Miniature", "مدينة مصغّرة"),
    ("urban", "05_02", "After Dark I", "بعد العتمة ١"),
    ("urban", "05_03", "After Dark II", "بعد العتمة ٢"),
    ("urban", "05_04", "Ramallah, Reimagined", "رام الله متخيّلة"),
    ("urban", "05_07", "Street Light", "ضوء الشارع"),
    ("urban", "05_10", "Night Rhythm", "إيقاع الليل"),
    ("atmosphere", "06_01", "The Empty Chair", "الكرسي الخالي"),
    ("atmosphere", "06_03", "Above the Valley", "فوق الوادي"),
    ("atmosphere", "06_04", "Inside the Olive Tree", "داخل شجرة الزيتون"),
    ("atmosphere", "06_05", "Dream Landscape I", "مشهد حلمي ١"),
    ("atmosphere", "06_06", "Dream Landscape II", "مشهد حلمي ٢"),
    ("atmosphere", "06_09", "Under Desert Stars", "تحت نجوم الصحراء"),
    ("atmosphere", "06_10", "City of Fragments", "مدينة الشظايا"),
    ("portrait", "07_01", "Abstract Face", "وجه مجرّد"),
    ("portrait", "07_03", "Lines of a Face", "خطوط الوجه"),
    ("portrait", "07_04", "Filament Study", "دراسة الخيوط"),
    ("portrait", "07_07", "Portrait in Shadow", "بورتريه في الظل"),
    ("portrait", "07_09", "Between Smile and Shadow", "بين الابتسامة والظل"),
]

categories = {
    "palestine": "04_Palestinian_Visuals", "fashion": "01_Fashion_Editorial",
    "urban": "05_Urban_Nocturnes", "atmosphere": "06_Atmospheric_Worlds",
    "portrait": "07_Dark_Surreal_Portraits",
}
OUT.mkdir(parents=True, exist_ok=True)
records = []
for category, prefix, title_en, title_ar in SELECTION:
    matches = list((ARCHIVE / categories[category]).glob(prefix + "_*.jpg"))
    if len(matches) != 1:
        raise RuntimeError(f"Expected one source for {prefix}: {matches}")
    source = matches[0]
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        width, height = image.size
        for target in (480, 1200):
            copy = image.copy()
            copy.thumbnail((target, target * 3), Image.Resampling.LANCZOS)
            copy.save(OUT / f"{prefix}-{target}.webp", "WEBP", quality=80, method=6, exif=b"")
    records.append({"id": prefix, "category": category, "title": {"en": title_en, "ar": title_ar},
                    "width": width, "height": height, "small": f"/media/visual-art/{prefix}-480.webp",
                    "large": f"/media/visual-art/{prefix}-1200.webp", "source": source.name})
DATA.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Built {len(records)} artwork records and {len(records)*2} metadata-free derivatives")
