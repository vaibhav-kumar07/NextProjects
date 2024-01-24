import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/common/dateutils";
import { Label } from "../ui/label";

export default function Detail({
  label,
  value,
  className,
  labelClass,
  valueClass,
}: {
  label?: string;
  value: string | number | Date;
  className?: string;
  labelClass?: string;
  valueClass?: string;
}) {
  return (
    <div
      className={cn("flex gap-1 justify-center items-center track", className)}
    >
      {label && (
        <Label
          className={cn(
            "font-semibold text-base leading-tight tracking-wider",
            labelClass
          )}
        >
          {`${label}`}
        </Label>
      )}
      {label && <p className={"text-primary tracking-wider"}>{`:`}</p>}
      <Label className={cn("tracking-wider", valueClass)}>
        {typeof value === "number"
          ? ` ${value}`
          : value instanceof Date
          ? formatDate(value, "MMMM Do YYYY, h:mm A")
          : String(value)}
      </Label>
    </div>
  );
}
