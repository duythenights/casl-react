import { Can } from "../../lib/casl/abilityContext";
import { useAbilityStore } from "../../lib/casl/abitityStore";

export default function ReportPage() {
  const ability = useAbilityStore((state) => state.ability);
  return (
    <div>
      {ability.can("export", "ReportSiteExportNC") && (
        <button>Export report</button>
      )}
      <Can I="export" a="ReportSiteExportNC">
        <button>Export report</button>
      </Can>
    </div>
  );
}
