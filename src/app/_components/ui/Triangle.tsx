export default function Triangle({
  color,
  size,
}: {
  color: string;
  size: string;
}) {
  // اندازه مثلث با استفاده از border محاسبه می شود
  // اگر size="100%" باشد، عرض و ارتفاع border برابر با size خواهد بود
  // برای مثلث متساوی الاضلاع، ارتفاع برابر است با (sqrt(3)/2) * base
  // اما اینجا با استفاده از border، شکل مثلث ایجاد می شود
  // اندازه border هر طرف، نصف اندازه کلی ضلع را پوشش می دهد

  const borderWidth = `calc(${size} / 2)`; // نصف اندازه کلی مثلث

  return (
    <div
      className="transform rotate-180" // برای اینکه راس مثلث به سمت بالا باشد
      style={{
        width: 0,
        height: 0,
        borderLeft: `${borderWidth} solid transparent`,
        borderRight: `${borderWidth} solid transparent`,
        borderBottom: `${borderWidth} solid ${color}`, // این قسمت رنگ مثلث را تعیین می کند
      }}
    />
  );
}
